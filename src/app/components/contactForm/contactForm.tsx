import React, { useState } from 'react';
import './contactForm.scss'
import {
  Button,
  Form,
  Input,
} from 'antd';
import { send } from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

interface ContactFormProps {
  bringAMessage: () => void; // Define your prop type here
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const [form] = Form.useForm();
  const [formAnimationClass, setFormAnimationClass] = useState("");
  const onFinish = (values: any) => {
    send('service_qz8dbbc', 'template_59n31gv', values, 'SQLBLHg9BTi7QgDbN')
    .then(function(response) {
      setFormAnimationClass("goneAway")
      props.bringAMessage();
      console.log('SUCCESS!', response.status, response.text);
       
    }, function(error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops... Sorry!',
          text: 'I am most probably out of emails 😰. Could you reach me at tiagostaurenghi@gmail.com?',
        })
       console.log('FAILED...', error);
    });
  };


  return (
    <Form
      className={formAnimationClass}
      {...formItemLayout}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{  }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
      size='large'
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="message"
        label="Message"
        rules={[{ required: true, message: 'Say hello! 😊' }]}
      >
        <Input.TextArea showCount maxLength={700} />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button className="form-btn" type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;

function sweetAlert(arg0: string, arg1: string, arg2: string) {
  throw new Error('Function not implemented.');
}
