import axios from 'axios';


const baseURl = "http://localhost:5000"

const ApiService = {
    getUsers() {
        return axios.get(`${baseURl}/user`)
    },
    getAllImages(){
        return axios.get(`${baseURl}/image`)
    },
    getUserById(id){
        return axios.get(`${baseURl}/user/${id}`)
    },
    getChapter() {
        return axios.get(`${baseURl}/chapter`)
    },
    getAssignment(){
        return axios.get(`${baseURl}/assignment`)
    },
    login(payload){
        let axiosOption = Object.assign(
            {
                data: payload,
            }
        );
        return axios.post(`${baseURl}/user/login`,axiosOption)
    },
    create(payload){
        let axiosOption = Object.assign(
            {
                data: payload,
            }
        );
        return axios.post(`${baseURl}/user/create`,axiosOption)
    },
    getChapterById(id){
        return axios.get(`${baseURl}/chapter/${id}`)
    },
    getAssignmentbyID(id){
        return axios.get(`${baseURl}/assignment/${id}`)
    },
    createQuestion(payload){
        let axiosOption = Object.assign(
            {
                data: payload,
            }
        );
        return axios.post(`${baseURl}/assignment/question/create`,axiosOption)
    },
    createChapter(payload){
        let axiosOption = Object.assign(
            {
                data: payload,
            }
        );
        return axios.post(`${baseURl}/chapter/create`,axiosOption)
    },
    createAssignment(payload){
        let axiosOption = Object.assign(
            {
                data: payload,
            }
        );
        return axios.post(`${baseURl}/assignment/create`,axiosOption)
    },
    uploadImage(payload){
        console.log(payload,">>payload")
        let axiosOption = Object.assign(
            {
                data: payload,
            }
        );
        return axios.post(`${baseURl}/image/upload`,axiosOption)
    },
    updateUser(payload,id){
        let axiosOption = Object.assign(
            {
                data: payload,
            }
        );
        return axios.put(`${baseURl}/user/${id}`,axiosOption)
    },
    updateChapter(payload,id){
        let axiosOption = Object.assign(
            {
                data: payload,
            }
        );
        return axios.put(`${baseURl}/chapter/${id}`,axiosOption)
    },
    updatedAssignment(payload,id){
        let axiosOption = Object.assign(
            {
                data: payload,
            }
        );
        return axios.put(`${baseURl}/assignment/${id}`,axiosOption)
    },
}

export default ApiService;