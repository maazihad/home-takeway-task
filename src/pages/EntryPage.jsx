import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const EntryPage = () => {
   const [longUrl, setLongUrl] = useState('');

   const handleSubmit = (values) => {
      const shortUrl = uuidv4().substring(0, 8);
      localStorage.setItem(shortUrl, values.longUrl);
      message.success('Short URL created successfully!');
      setLongUrl('');
   };

   return (
      <Form
         onFinish={handleSubmit}
         className="bg-purple-300 w-96 mx-auto my-5 p-10 rounded-lg shadow-lg"
      >
         <h2 className="text-2xl font-semibold mb-4 text-center">URL Shortener</h2>
         <Form.Item
            name="longUrl"
            rules={[
               {
                  required: true,
                  message: 'Please enter a long URL!',
               },
            ]}
         >
            <Input
               value={longUrl}
               onChange={(e) => setLongUrl(e.target.value)}
               placeholder="Enter a long URL"
               className="w-full px-4 py-2 border border-gray-300 rounded"
            />
         </Form.Item>
         <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-purple-700">
               Generate Short URL
            </Button>
         </Form.Item>
      </Form>
   );
};

export default EntryPage;