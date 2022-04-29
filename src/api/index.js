// const URL = "https://royale-flush.herokuapp.com/api";

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
export const getMe = async (token) => {
  try {
    const response = await fetch(`/api/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
export const getAllProducts = async () => {
  const response = await fetch(`/api/products`);
  const data = await response.json();
  console.log("93093903");
  return data;
};

export const getCart = async (customerId) => {
  const response = await fetch(`/api/order/${customerId}/order`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const logout = async () => {
  const response = await fetch("/api/auth/logout");
  const data = await response.json();
  return response;
};
