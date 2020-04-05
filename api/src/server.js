import spinner from 'ora';
import app from './app';

app.listen(3333, () => {
  spinner('Server running...').start();
});
