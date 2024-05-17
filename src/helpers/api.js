import axios from "axios";

const BASE_URL = "https://national-coc-api.lmis.gov.et";

export const headers = {
  "authorization-key": "a593e16f43bc2fa6132af7d823113f729ba32d8416120808a967"
};

export const search_COC = async (params) => {
  try {
    const response = await axios.get(`${BASE_URL}/coc/search?${params}`, {
      headers
    });
    return response.data;
  } catch (error) {
    console.error("Error while fetching data from API", error);
  }
};

export const get_COC_All = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coc/get-all`, {
      headers
    });
    return response.data;
  } catch (error) {
    console.error("Error while fetching data from API", error);
  }
};

export const get_COC_Cert = async (reg_no) => {
  try {
    const response = await axios.get(`${BASE_URL}/coc/get?reg_no=${reg_no}`, {
      headers
    });
    return response.data;
  } catch (error) {
    console.error("Error while fetching data from API", error);
  }
};

export const get_Dashboard_Data = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coc/data`, {
      headers
    });
    return response.data;
  } catch (error) {
    console.error("Error while fetching data from API", error);
  }
};
