import axios from 'axios';

// const class_url = 'http://localhost:8080'
const class_url = 'https://www.f1nley.xyz/api/zjut-ics'
export const class_api = axios.create({
  baseURL: class_url,
  withCredentials: true,
})

export type getClassTableRequest = {
  username: string;
  password: string;
  year: string;
  term: string;
  start_date: string;
};

export function getClasstable(data: getClassTableRequest) {
  class_api.post('/', data).then((res) => {
    console.log(res.data);
    const blob = new Blob([res.data], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `${data.username}-${data.year}-${data.term}.ics`;
    a.click();
    document.body.removeChild(a);
  });
}
