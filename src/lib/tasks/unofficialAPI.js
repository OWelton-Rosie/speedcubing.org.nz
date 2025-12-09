export async function fetchUnnoficialAPI(path){
  const res = await fetch(`https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/master/api/${path}.json`);
  if(!res.ok){ 
    console.warn("BAD RESPONSE FROM UNNOFICIAL WCA API " + path);
    return [];
    // throw new Error("BAD RESPONSE FROM UNNOFICIAL WCA API " + path); 
  }
  return (await res.json());
}