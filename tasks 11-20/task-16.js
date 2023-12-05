const formatDate = (date) => {
  return moment(date).format("MMMM Do YYYY, h:mm:ss a");
};

export default formatDate;
