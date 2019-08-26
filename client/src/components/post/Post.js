import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem.js';
 
const Post = ({ getPost, post: { post, loading}, match }) => {
  useEffect(() => {
    getPost(match.params.id);

  }, [getPost]);
  return loading || post === null ? (
    <Spinner /> 
  ) : (
    <Fragment>
      <Link to="/posts" className='btn'>
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <h4>Comments: </h4>
      <div className="comments">
        {post.comments.map(com => (
          <CommentItem key={com._id} comment={com} postId={post._id} />
        ))}
      </div>
    </Fragment>
  )
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
