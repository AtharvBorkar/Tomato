# Tomato
Production-Ready Zomato Clone with Microservices, RabbitMQ &amp; Real-Time Tracking<br>
The application supports multiple roles:<br>
• Customer<br>
• Restaurant (Seller)<br>
• Delivery Partner (Rider)<br>
• Admin (Verification & Management)<br>
<br>
The backend is divided into 6 independent microservices:<br>
• Auth Service<br>
• Restaurant Service<br>
• Rider Service<br>
• Admin Service<br>
• Realtime Service (Socket.IO)<br>
• Utils Service (File Uploads & Payments)<br>
<br>
For communication between services, RabbitMQ is used as a message broker and is deployed on AWS using Docker.<br>
<br>
Real-time features include:<br>
• Live order status updates<br>
• Real-time rider location tracking<br>
• Navigation for riders to delivery locations<br>
• Customers can track the delivery partner live on the map<br>
• Sound notifications for order received and delivery accepted<br>
<br>
Payments are handled using two gateways:<br>
• Razorpay (for Indian users)<br>
• Stripe (for global users)<br>
<br>
The entire project is dockerized and deployed:<br>
• Backend microservices on Render<br>
• Frontend on Vercel<br>
