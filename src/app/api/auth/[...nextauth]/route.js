import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers:[
    CredentialsProvider({
        name:'credentials',
        credentials:{
            email:{},
            password:{}
        },
        async authorize(credentials,req){
            const user={id:'1',username:'jon',email:'dmmd@ssnkx',password:"ejddde"};
            return user;
        }

    })
  ]
})

export { handler as GET, handler as POST }