import { create } from "zustand";
import socket from "../socket/socket";


export const liveStore = create((set) => ({
    live: [],
    liveLoading: false,
    sendMessage: async (v) => {
        set({liveLoading: true})
        try {
            socket.emit('user', v)
        } catch (error) {
            console.log(error);
        }finally {
            set({liveLoading: false})
        }
    },
    getmessage: async (v) => {
        set({liveLoading: true})
        try {
            const res = await new Promise((resolve, reject) =>{ 
                socket.emit('checkuser', v);
                socket.on('userhist', resolve)
            })
            set({live: res})
        } catch (error) {
            console.log(error);
        }finally {
            set({liveLoading: false})
        }
    },
}))