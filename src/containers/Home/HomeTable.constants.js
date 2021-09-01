import React from "react";
import moment from "moment";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import styled from "styled-components";

export const columns = [
  {
    selector: "number",
    name: "ID",
    sortable: true,
    maxWidth: "50px",
    format: (row) => `#${row.number}`,
  },
  {
    selector: "title",
    name: "Title",
    sortable: true,
    minWidth: "380px",
  },
  {
    selector: "user.login",
    name: "Author",
    sortable: true,
    maxWidth: "400px",
  },
  {
    selector: "comments",
    name: "Comments",
    sortable: true,
    maxWidth: "60px",
    format: (row) => (
      <span>
        {" "}
        <CountPosition>{`${row.comments}`}</CountPosition>{" "}
        <ChatBubbleIcon style={{ color: "gray" }} />{" "}
      </span>
    ),
  },
  {
    selector: "state",
    name: "Status",
    sortable: true,
    maxWidth: "60px",
  },
  {
    selector: "created_at",
    name: "Created at",
    sortable: true,
    maxWidth: "180px",
    format: (row) => `${moment(row.created_at).fromNow()}`,
  },
];

const CountPosition = styled.span`
  position: relative;
  bottom: 6px;
  color: gray;
`;
