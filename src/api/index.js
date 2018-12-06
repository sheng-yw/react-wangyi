import sendAjax from './ajax'

export const reqDataHome = () => sendAjax('/dataHome');
export const reqDataType = () => sendAjax('/dataType');
export const reqDistinctionData = () => sendAjax('/dataDistinction');
