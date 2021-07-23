
import {MongoClient} from 'mongodb'

export default async function handler(req, res) {
  if (req.method === 'POST'){
    const {email, name, message} = req.body;
    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === ''){
      res.status(422).json({ message: 'Invalid input' })

      return;
    }
    const newMessage = {email, name, message}
    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.4xie8.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
    try {
        client = await MongoClient.connect(connectionString)
    }catch (e) {
        res.status(500).json({ message: e.message })

        return;
    }
   const db = client.db()
      try {
          const result = await db.collection('messages').insertOne(newMessage)
          newMessage.id = result.insertedId

      }catch (e) {
          client.close()
          res.status(500).json({ message: e.message })
          return;
      }
      client.close()

    res.status(201).json({  message: newMessage });

  }
}
