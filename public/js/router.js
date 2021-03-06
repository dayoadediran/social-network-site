define(['views/index', 'views/register','views/login','views/forgotPassword'],
  function(IndexView, RegisterView, LoginView, ForgotPasswordView){
    var socialRouter = Backbone.Router.extend({
    currentView:null,

    routes:{
      'index':'index',
      'login':'login',
      'register':'register',
      'forgotPassword':'forgotPassword'
      },
      changeView: function(view){
        if(null != this.currentView){
          this.currentView.undelegateEvents();
        }
        this.currentView = view;
        this.currentView.render();
      } ,
      index: function(){
        this.changeView(new IndexView());
      } ,
      login: function(){
        this.changeView(new LoginView());
      },
      forgotPassword: function(){
        this.changeView(new ForgotPasswordView());
      },
      register: function(){
        this.changeView(new RegisterView());
      }
    });
    return new socialRouter();
  });
