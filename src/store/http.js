import { dataActions } from ".";

const url = 'https://mikolajjkrol.pythonanywhere.com/opryski'

export const getData = () => {
    return async (dispatch) => {

        const fetchDispatchData = async () => {
            const res = await fetch(url);

            if(!res.ok){
                const error = new Error('Could not fetch');
                throw error;
            }

            return await res.json()
        }

        try {
            const data = await fetchDispatchData()

            console.log(data)

            dispatch(dataActions.swapData(data))
        } catch(error) {
            throw error;
        }
    }
}

export const fetchData = async () => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Could not fetch');
  return res.json();
};

export const sendData = async (data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Could not send data');
};

export const deleteOprysk = async (id) => {
  try {
    const res = await fetch(`https://mikolajjkrol.pythonanywhere.com/opryski/${id}`, { method: "DELETE" });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log('Did not delete data, id: ' + id)
    throw new Error('Could not delete data');
  }
}