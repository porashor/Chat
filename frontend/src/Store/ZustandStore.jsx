import { create } from 'zustand'
import toast from 'react-hot-toast'

export const popupZus = create((set) => ({
    loginopen: false,
    signopen: false,
    onLogin: (v) => set({ loginopen: v }),
    onSign: (v) => set({ signopen: v }),
}))


export const formFunction = create((set) => ({
    name: '',
    email: '',
    password: '', 
    loginLoading: false,
    singinLoading: false,
    feedback: '',
    onName: (v) => set({name: v }),
    onEmail: (v) => set({ email: v }),
    onPassword: (v) => set({ password: v }),

    LogInNow: (v) => async () => {
        console.log("called")
        set({loginLoading: true})
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(v),
            })
            const data = await res.json()
            console.log(data)
            set({name: '', email: '', password: ''})
            toast.success(data.message)
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }finally {
            set({loginLoading: false})
            set({name: '', email: '', password: ''})
        }
    },
    SignInNow: async (formData) => {
        set({singinLoading: true})
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/sign`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            const data = await res.json()
            console.log(data);
            set({feedback: data})
            set({name: '', email: '', password: ''})
            toast.success("successfully sign in")
        } catch (error) {
            console.log(error);
            toast.error("something error")
        }finally {
            set({singinLoading: false})
            set({name: '', email: '', password: ''})
        }
    },
    logOut: async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            toast.success("log out success")
        } catch (error) {
            console.log(error);
        }
    }
}))



export const userListing = create((set) => ({
    user: [],
    profile: {},
    userloading: false,
    profileloading: false,
    userListGet: async () => {
        set({userloading: true})
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/auth`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await res.json()
            console.log(data);
            set({user: data})
        } catch (error) {
            console.log(error);
        }finally {
            set({userloading: false})
        }
    },

    getProfileData: async ()=>{
        set({profileloading: true})
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/user`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await res.json()
            console.log(data);
            set({profile: data})
        } catch (error) {
            console.log(error);
        }finally {
            set({profileloading: false})
        }
    }
}))


export const msgfunc = create((set)=>({
    person: {},
    me: {},
    onPerson: (v) => set({person: v }),
    onMe: (v) => set({ me: v }),    
}))



