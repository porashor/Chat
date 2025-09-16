import { create } from 'zustand'


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
        set({loginLoading: true})
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(v),
            })
            const data = await res.json()
            set({feedback: data.message})
        } catch (error) {
            console.log(error);
        }finally {
            set({loginLoading: false})
        }
    },

    SignInNow: (v) => async () => {
        set({singinLoading: true})
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(v),
            })
            const data = await res.json()
            set({feedback: data.message})
        } catch (error) {
            console.log(error);
        }finally {
            set({singinLoading: false})
        }
    },
    
}))

