const { REACT_APP_BACKEND_API } = process.env;

export const getPhones = async () => {
  try {
    const response = await fetch(`${REACT_APP_BACKEND_API}/phones`);
    if (!response.ok) {
      throw Error("could not fetch the data");
    }
    return response.json();
  } catch (err) {
    console.error(err);
  }
};

export const deletePhone = async (id) => {
  const deleting = await fetch(`${REACT_APP_BACKEND_API}/phones/${id}`, {
    method: "DELETE",
  });
  return deleting;
};

export const postPhone = async (newPhone) => {
  try {
    const data = await fetch(`${REACT_APP_BACKEND_API}/phones`, {
      method: "POST",
      body: JSON.stringify(newPhone),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const event = await data.json();
    return event;
  } catch (err) {
    console.error(err);
  }
};
