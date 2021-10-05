import { Button, TextField } from '@mui/material';
import React from 'react';
import { useActions } from '../../hooks/useActions';
import MainLayout from '../../layouts/MainLayout';
import SendIcon from '@mui/icons-material/Send';
import styles from '../../styles/AddPost.module.scss';

export default function index() {
  const { addPostActionCreator } = useActions();

  const [id, setid] = React.useState();
  const [title, settitle] = React.useState();
  const [body, setbody] = React.useState();

  const onChangeId = (e) => {
    setid(e.target.value);
  };

  const onChangeTitle = (e) => {
    settitle(e.target.value);
  };

  const onChangeBody = (e) => {
    setbody(e.target.value);
  };

  const setPost = () => {
    addPostActionCreator(title, body, id);
  };

  return (
    <MainLayout>
      <div>Добавить пост</div>
      <TextField
        className={styles.inpts}
        id="outlined-basic"
        label="Id"
        variant="outlined"
        onChange={(e) => onChangeId(e)}
        type="text"
      />
      <TextField
        className={styles.inpts}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        onChange={(e) => onChangeTitle(e)}
        type="text"
      />
      <TextField
        className={styles.inpts}
        id="outlined-basic"
        label="Body"
        variant="outlined"
        onChange={(e) => onChangeBody(e)}
        type="text"
      />
      <Button
        className={styles.addBtn}
        onClick={() => setPost()}
        variant="contained"
        endIcon={<SendIcon />}>
        Добавить
      </Button>
    </MainLayout>
  );
}
