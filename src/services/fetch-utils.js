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


export async function fetchCompressorsAndOwners() {
  const request = await client
    .from('compressors')
    .select(`*,
            owner_id(*)`);
  
  return request.data;
}

export async function fetchOwners() {
  const request = await client
    .from('studio_owners')
    .select();

  return request.data;
}