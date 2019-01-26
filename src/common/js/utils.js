import { Modal } from 'antd';

export let showError = (msg) => {
  Modal.error({
    title: "提示",
    content: msg
  });
};
