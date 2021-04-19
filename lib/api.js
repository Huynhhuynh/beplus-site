/**
 * API
 */

import { request, GraphQLClient, gql } from 'graphql-request'

/**
 * 
 * @param {*} query 
 * @param {*} variables 
 * @returns 
 */
export async function Request( query, variables = {} ) {
  const endpoint = process.env.ENDPOINT_API
  const client = new GraphQLClient( endpoint, { headers: {} } )
  return await client.request( query, variables )
}

/**
 * 
 * @returns 
 */
export async function GetMembers( variables = {} ) {
  const query = `query Members {
    teams {
      edges {
        node {
          id
          title
          slug
          featuredImage {
            node {
              sourceUrl(size: THUMBNAIL)
            }
          }
          content(format: RENDERED)
        }
      }
    }
  }
  `
  return await Request( query, variables )
}