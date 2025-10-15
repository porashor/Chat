import { create } from "zustand";



export const messager = create((set) => ({
    message: [],
    msgloading: false,
    messageget: async (v) => {
        set({ msgloading: true })
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/message/getmessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(v),
            })
            const data = await res.json()
            console.log(data);
            set({ message: data })
        } catch (error) {
            console.log(error);
        }finally {
            set({ msgloading: false })
        }
    },
    sendmessage: async (v) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/message/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(v),
            })
            const data = await res.json()
            set({message: res})
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    },
}))