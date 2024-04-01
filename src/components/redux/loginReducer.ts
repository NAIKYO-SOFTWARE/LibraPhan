import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface IUser{
    email:string;
    password:string;
}

interface IUserState {
    userId: string;
    isLoading: boolean;
}

const initialState:IUserState = {
    userId:"",
    isLoading:false,
}


export const login = createAsyncThunk(
    "user/login",
    async ({ email,password } : IUser) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 0));
        return {email,password};
      } catch (error) {
          throw new Error("Network Error occurred");
      }
    }
)


const handleLogin = createSlice({
    initialState,
    name:"user",
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled,(state,action) => {
            state.userId = action.payload.email;
            state.isLoading = false;
        });
        builder.addCase(login.pending,(state,action) => {
            state.isLoading = true;
            console.log(action);
            
        });
        builder.addCase(login.rejected, (state,action) => {
            state.isLoading = false;
            console.log(action);
            
        })
    }
})

export const handleLoginReducer = handleLogin.reducer;


