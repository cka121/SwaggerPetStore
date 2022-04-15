type Info = {
  title: string,
  description: string
}
type InitialState = {
  info:Info,
  tags:string[],
  paths:Object,
  host: string,
  basePath: string,
  groupedPaths: Object[],
  apis: Object[]
}
export const initialState:InitialState = {
info: {
  title: '',
  description: '',
},
tags: [],
paths: {},
host: '',
basePath: '',
groupedPaths: [],
apis: [],
};