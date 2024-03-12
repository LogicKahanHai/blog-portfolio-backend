import Joi from "joi";

const blogPartJoiSchema = Joi.object({
    type: Joi.string().required(),
    content: Joi.string().required(),
    dateTime: Joi.date().required(),
});

const blogJoiSchema = Joi.object({
    title: Joi.string().required(),
    teaser: Joi.string().required(),
    content: Joi.array().items(blogPartJoiSchema).default([]),
    dateTime: Joi.date().required(),
    tags: Joi.array().items(Joi.string()).default([]),
});

export default blogJoiSchema;