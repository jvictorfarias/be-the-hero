import spinner from 'ora';
import app from './app';

try {
  app.listen(process.env.PORT || 3333, () => {
    spinner('Server running...').succeed();
  });
} catch (error) {
  spinner('Failed to start server').fail();
}
