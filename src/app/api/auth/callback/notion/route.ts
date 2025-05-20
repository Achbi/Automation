import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export async function GET(req: NextRequest) {
  // Extract code from query parameters
  const code = req.nextUrl.searchParams.get('code');
  
  // Debug environment variables
  console.log("Notion environment variables:");
  console.log(`NOTION_CLIENT_ID: ${process.env.NOTION_CLIENT_ID}`);
  console.log(`NOTION_API_SECRET length: ${process.env.NOTION_API_SECRET?.length || 0}`);
  console.log(`NOTION_REDIRECT_URI: ${process.env.NOTION_REDIRECT_URI}`);
  
  if (!code) {
    console.error("No code provided in the request");
    return NextResponse.redirect('https://localhost:3000/connections?error=no_code');
  }

  try {
    // Notion recommended way to authenticate
    // https://developers.notion.com/docs/authorization#step-2-exchange-the-authorization-code-for-an-access-token
    const response = await axios.post('https://api.notion.com/v1/oauth/token', {
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.NOTION_REDIRECT_URI
    }, {
      auth: {
        username: process.env.NOTION_CLIENT_ID || '',
        password: process.env.NOTION_API_SECRET || ''
      },
      headers: {
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      }
    });

    console.log("Notion OAuth successful, access token received");
    
    // Initialize Notion client with the received access token
    const notion = new Client({
      auth: response.data.access_token,
    });

    // Search for databases in the workspace
    const databasesPages = await notion.search({
      filter: {
        value: 'database',
        property: 'object',
      },
      sort: {
        direction: 'ascending',
        timestamp: 'last_edited_time',
      },
    });

    const databaseId = databasesPages?.results?.length
      ? databasesPages.results[0].id
      : '';
      
    console.log(`Found database ID: ${databaseId || 'No database found'}`);

    // Redirect with successful data
    return NextResponse.redirect(
      `https://localhost:3000/connections?access_token=${response.data.access_token}&workspace_name=${response.data.workspace_name}&workspace_icon=${response.data.workspace_icon || ''}&workspace_id=${response.data.workspace_id}&database_id=${databaseId}`
    );
    
  } catch (error) {
    console.error("Notion OAuth error:", error.response?.data || error.message);
    
    // Provide more specific error information in the redirect
    const errorMessage = error.response?.data?.error || 'unknown_error';
    return NextResponse.redirect(`https://localhost:3000/connections?error=${errorMessage}`);
  }
}