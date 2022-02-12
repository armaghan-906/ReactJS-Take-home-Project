import { gql } from "@apollo/client";

export const CREATE_JOB = gql`
mutation postJob($title: String!, $description: String!, $locationNames: String!, $userEmail: String!, $applyUrl: String!) {
    postJob(input: {title: $title, description: $description, locationNames: $locationNames, commitmentId: "cjtu8esth000z0824x00wtp1i", companyName: "Trimulabs", userEmail: $userEmail, applyUrl: $applyUrl})
    {
      title
    }
  }
`;