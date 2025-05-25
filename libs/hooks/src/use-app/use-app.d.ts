import { message, Modal, notification } from 'antd';
type CustomModalFunctions = Omit<ReturnType<typeof Modal>, 'warn'> & {
    confirm: typeof Modal.confirm;
    info: typeof Modal.info;
    error: typeof Modal.error;
    warning: typeof Modal.warning;
    success: typeof Modal.success;
};
interface IUseApp {
    message: typeof message;
    notification: typeof notification;
    modal: CustomModalFunctions;
}
declare const useApp: () => IUseApp;
export default useApp;
//# sourceMappingURL=use-app.d.ts.map