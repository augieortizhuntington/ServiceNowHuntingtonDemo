var user = new GlideRecord('sys_user');
user.addQuery('sys_id', "Some sys ID");
user.query();
while(user.next()){
   gs.log(user.email);
}