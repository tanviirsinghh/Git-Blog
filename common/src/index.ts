import { z } from 'zod';

//  use tsc -b to build the file 
// it will build the index.js in dist folder
// and then i will automatically update the index.js
export const signupInput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional(),
    blogName: z.string().optional(),
    profilePicture: z.string().optional()
})
export const signinInput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})
export const createBlogInput = z.object({
    title:z.string(),
    content:z.string(),
    url: z.string().optional()

})
export const updateBlogInput = z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()

})


export type SignupInput = z.infer<typeof signupInput>

export type SigninInput = z.infer<typeof signinInput>

export type CreateBlogInput = z.infer<typeof createBlogInput>

export type UpdateBlogInput = z.infer<typeof updateBlogInput>
