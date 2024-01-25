import getAxiosClient from '.';

export const getAllProducts = async () => (await getAxiosClient().get('catalog/allAll')).data;