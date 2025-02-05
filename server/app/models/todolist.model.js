module.exports = mongoose => {
    const schema = mongoose.Schema(
      {
        libelle : String, 
        done : Boolean, 
        rang : String
      }
    );  
    const Todolist = mongoose.model("todolist", schema);
    return Todolist;
};