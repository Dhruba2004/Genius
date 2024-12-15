import { pgTable,serial,varchar,text } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id:serial('id').primaryKey(),
    formData : varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlug : varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy'),
    createdAt:varchar('createdAt')
})

export const Users = pgTable('Users', {
    id:serial('id').primaryKey(),
    email:varchar('email').notNull(),
    password:varchar('password').notNull(),
    createdAt:varchar('createdAt'),
    imageUrl:varchar('imageUrl')
})