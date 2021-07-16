const { Annotation } = require("../models");

const getAnnotations = async (ctx, next) => {
  // Handler for all annotations
  if (ctx.request.query.get("user")) {
    return getAnnotationsByUser(ctx, next);
  }
  
  if (ctx.request.query.get("metObjectId")) {
    return getAnnotationsByMetObjectID(ctx, next);
  }
};

const getAnnotationsByMetObjectID = async (ctx, next) => {
  const { id } = ctx.request.query;
  try {
    const annotations = await Annotation.findAll({ id: id });
    ctx.status = 200;
    ctx.body = annotations;
  } catch (err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = err.message;
  }
};

const getAnnotationsByUser = async (ctx, next) => {
  const { user } = ctx.request.query;
  try {
    const annotations = await Annotation.findAll({ id: user });
    ctx.status = 200;
    ctx.body = annotations;
  } catch (err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = err.message;
  }
};

// 

const getAnnotationById = async (ctx, next) => {
  const { id } = ctx.request.query;
  try {
    const annotation = await Annotation.findAll({ id: id });
    ctx.status = 200;
    ctx.body = annotation;
  } catch (err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = err.message;
  }
};

const createAnnotation = async (ctx, next) => {
  const { metItem, author, name, body } = ctx.request.query;
  const data = { metItem, author, name, body };
  try {
    const annotation = await Annotation.create(data);
    ctx.status = 200;
    ctx.body = {id: annotation.id};
  } catch (err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = err.message;
  }
};

const updateAnnotation = async (ctx, next) => {
  const { id, metItem, author, name, body } = ctx.request.query;
  const data = { metItem, author, name, body };
  try {
    const annotation = await Annotation.update(data, {where: {id: id}});
    ctx.status = 200;
    // Return updated annotation
    ctx.body = annotation;
  } catch (err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = err.message;
  }
};

const deleteAnnotation = async (ctx, next) => {
  const { id } = ctx.request.query;
  try {
    const annotation = await Annotation.destroy({where: {id: id}});
    ctx.status = 200;
    ctx.body = {id: annotation.id};
  } catch (err) {
    console.error(err);
    ctx.status = 400;
    ctx.body = err.message;
  }
};

module.exports = {
  getAnnotations,
  getAnnotationById,
  // single
  createAnnotation,
  updateAnnotation,
  deleteAnnotation
};
