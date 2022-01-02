import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from "@aws-amplify/api-graphql"
import { createNote, deleteNote as deleteNoteAPI, updateNote as updateNoteAPI } from '../graphql/mutations';
import {
    listNotes as listNotesQuery,
} from '../graphql/queries';

import { ListNotesQuery } from '../API';

export const addNote = async (name: string, body: string) => {
    const date = new Date().toDateString();

    return await API.graphql(graphqlOperation(createNote, { input: { name, body, date } }));
};

export const updateNote = async (id: string, body: string) => {
    const date = new Date().toDateString();

    return await API.graphql(graphqlOperation(updateNoteAPI, { input: { id, body, date } }));
};

export const listNotes = async () => {
    const result = await API.graphql(graphqlOperation(listNotesQuery)) as GraphQLResult<ListNotesQuery>;

    return result?.data?.listNotes?.items;
};

export const deleteNote = async (id: string) => {
    return await API.graphql(graphqlOperation(deleteNoteAPI, { input: { id } }));
};