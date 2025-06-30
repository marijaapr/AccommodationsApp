import axios from "axios";

const baseURL =
    import.meta.env.MODE === 'development'
        ? 'http://localhost:9090/api'        //  docker compose
        : 'http://backend.221093.local/api';         //  Kubernetes Ingress

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;