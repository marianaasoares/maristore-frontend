import {defineStore} from "pinia";

export const useLoginStore = defineStore('login', {
    state: () => ({
        userInfo: {},
        userToken: "",
    })
})