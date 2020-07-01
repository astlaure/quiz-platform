import axios, { AxiosError } from 'axios';

const useHttpClient = () => {
    const get = async (url: string) => {
        try {
            const response = await axios.get(url);

            return response.data;
        } catch (err) {
            if ((err as AxiosError).response?.status === 401) {
                // dispatch logout
            }
        }
    }

    return { get };
}

export default useHttpClient;