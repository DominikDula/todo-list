import { TodoList } from "@/app/types/TodoList";
import { TodoItem } from "@/app/types/TodoItem";

const API_URL = 'https://6725ea5dc39fedae05b645b9.mockapi.io/api/TodoList';


export const fetchTodoLists = async (): Promise<TodoList[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch Todo lists');
  }
  return response.json();
};

export const fetchTodoListById = async (id: string): Promise<TodoList> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Todo list with id: ${id}`);
  }
  return response.json();
};

export const createTodoList = async (newList: TodoList): Promise<TodoList> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newList),
  });
  if (!response.ok) {
    throw new Error('Failed to create Todo list');
  }
  return response.json();
};

export const updateTodoList = async (id: string, updatedList: TodoList): Promise<TodoList> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT', // or 'PATCH'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedList),
  });
  if (!response.ok) {
    throw new Error(`Failed to update Todo list with id: ${id}`);
  }
  return response.json();
};

export const deleteTodoList = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete Todo list with id: ${id}`);
  }
};

// Fetch all tasks for a specific Todo list
export const fetchTodoItemsByListId = async (listId: string): Promise<TodoItem[]> => {
  const response = await fetch(`${API_URL}/${listId}/TodoItem`);
  if (!response.ok) {
    throw new Error(`Failed to fetch tasks for Todo list with id: ${listId}`);
  }
  return response.json();
};

// Fetch a specific task by ID
export const fetchTodoItemById = async (listId: string, taskId: string): Promise<TodoItem> => {
  const response = await fetch(`${API_URL}/${listId}/TodoItem/${taskId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch task with id: ${taskId} from Todo list with id: ${listId}`);
  }
  return response.json();
};

// Create a new task for a specific Todo list
export const createTodoItem = async (listId: string, newItem: TodoItem): Promise<TodoItem> => {
  const response = await fetch(`${API_URL}/${listId}/TodoItem`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem),
  });
  if (!response.ok) {
    throw new Error(`Failed to create task for Todo list with id: ${listId}`);
  }
  return response.json();
};

// Update an existing task
export const updateTodoItem = async (listId: string, itemId: string, completed: boolean): Promise<void> => {
  const response = await fetch(`${API_URL}/${listId}/TodoItem/${itemId}`, {
    method: 'PUT', // nebo 'PATCH' podle potřeby
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed }),
  });
  if (!response.ok) {
    throw new Error(`Failed to update item with id: ${itemId}`);
  }
};

// Delete a task from a specific Todo list
export const deleteTodoItem = async (listId: string, taskId: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${listId}/TodoItem/${taskId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete task with id: ${taskId} from Todo list with id: ${listId}`);
  }
};
