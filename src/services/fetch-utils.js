import { client } from './client.js';

console.log(client);

export async function fetchMicrophones() {
  const request = await client
    .from('microphones')
    .select();

  return request.data;
}

export async function fetchPreamps() {
  const request = await client
    .from('preamps')
    .select();

  return request.data;
}