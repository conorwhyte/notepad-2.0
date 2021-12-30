export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = (payload) => ({
    type: CHANGE_VALUE,
    value: payload,
});