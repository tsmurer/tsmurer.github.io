import React from 'react';
import './contactForm.scss'
import {
  Button,
  Form,
  Input,
} from 'antd';
import { send } from '@emailjs/browser';



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

const ContactForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    send('service_qz8dbbc', 'template_59n31gv', values, 'SQLBLHg9BTi7QgDbN')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  };


  return (
    <Form
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
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;