/* accordion menu plugin*/

;(function($, window, document, undefined) {

  var pluginName = "accordion";
  var defaults = {
    speed: 200,
    showDelay: 0,
    hideDelay: 0,
    singleOpen: true,
    clickEffect: true,
    indicator: 'submenu-indicator-minus',
    subMenu: 'submenu',
    closeSameLevel: true,
    useCookie: true,
    event: 'click touchstart' // click, touchstart
  };
       // var settings = $.extend( {}, defaults, options );
  function Plugin(element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }
  $.extend(Plugin.prototype, {
    init: function() {
      this.openSubmenu();
      this.submenuIndicators();
      if (defaults.clickEffect) {
        this.addClickEffect();
      }
    },
	
    openSubmenu: function ()
    {
	   $(this.element).children("ul").find("li").bind(defaults.event, function (e)
        {
        e.stopPropagation();
        e.preventDefault();
        var $subMenus = $(this).children("." + defaults.subMenu);
        var $allSubMenus = $(this).find("." + defaults.subMenu);
        if ($subMenus.length > 0) {
          if ($subMenus.css("display") == "none") {
            $subMenus.slideDown(defaults.speed).siblings("a").addClass(defaults.indicator);
            if (defaults.singleOpen) {
              $(this).siblings().find("." + defaults.subMenu).slideUp(defaults.speed)
                .end().find("a").removeClass(defaults.indicator);
            }
            return false;
          }
          else {
            $(this).find("." + defaults.subMenu).delay(defaults.hideDelay).slideUp(defaults.speed);
          }
          if ($allSubMenus.siblings("a").hasClass(defaults.indicator)) {
            $allSubMenus.siblings("a").removeClass(defaults.indicator);
          }
        }
        window.location.href = $(this).children("a").attr("href");
      });
	  /*
    			// new addition
		var $ul = $(this.element).find('ul');
        var $li = $(this.element).find('li');
        var $folder = $li.has("ul");

        $folder.prepend("<span class=\"plus\"></span><span class=\"folder\"></span>");
        $li.not($folder).prepend("<span class=\"join\"></span><span class=\"page\"></span>");
        $ul.parent("li").addClass("folder-group");
        $ul.children('li:last-child').not($folder).addClass("join-last");
        this.tree_first_element($li.first());
           
        $ul.children('li.folder-group:last-child').addClass("last");
//		alert(this.settings.useCookie)
            if(this.settings.useCookie && this.check_cookie("dTree"))
            {
                var object_index = JSON.parse(this.get_cookie("dTree"));
                $.each( object_index, function( key, value ) {
					alert('$this.text()')
                    $this = $ul.find("li.folder-group").eq(value);
                    //this.set_icons($this.children('span:first')); 
                    $this.children('ul:first').toggle();
                });
            //alert('$(this).text()');
            } else if($li.hasClass("active"))
            {
                $active = $ul.find("li.folder-group.active");
                $active.each(function(){
                    //this.set_icons($(this).children('span:first')); 
                    $(this.element).children('ul:first').toggle();
                });
                
                $active.parentsUntil("div", ".folder-group").each(function(){
                    //$.fn.dTree.set_icons($(this).children('span:first')); 
                    $(this.element).children('ul:first').toggle();
                });    
            }   
                if(this.settings.useCookie)
                {
//					alert($(this.element).text())
                    var obect_index = [];
                    $(this).parentsUntil("div", ".folder-group").each(function(){
						alert()
                        obect_index.push($(this).index(".folder-group"));
                    });
                    this.set_cookie("dTree", JSON.stringify(obect_index));
                }

		// new addition
  */
	},
	
    submenuIndicators: function() {
      if ($(this.element).find("." + defaults.subMenu).length > 0) {
        $(this.element).find("." + defaults.subMenu).siblings("a").append("<span class='submenu-indicator'>+</span>");
      }
    },

   
    addClickEffect: function() {
      var ink, d, x, y;
      $(this.element).find("a").bind("click touchstart", function(e) {
        $(".ink").remove();
        if ($(this).children(".ink").length === 0) {
          $(this).prepend("<span class='ink'></span>");
        }
        ink = $(this).find(".ink");
        ink.removeClass("animate-ink");
        if (!ink.height() && !ink.width()) {
          d = Math.max($(this).outerWidth(), $(this).outerHeight());
          ink.css({
            height: d,
            width: d
          });
        }
        x = e.pageX - $(this).offset().left - ink.width() / 2;
        y = e.pageY - $(this).offset().top - ink.height() / 2;
        ink.css({
          top: y + 'px',
          left: x + 'px'
        }).addClass("animate-ink");
      });

    },
	
	  
  // new addition
  
    set_cookie: function(name, value)
    {
		//alert(name)
		//alert(value)
         document.cookie = name + "=" + value;
    },
    
    get_cookie: function(name)
    {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    },
    
	check_cookie: function(name)
    {
        var _cookie = document.cookie;
		var pattern = new RegExp(""+name+"=([^;=]+)[;\\b]?");
	
		if(pattern.test(_cookie))
		{
            return true;
		}
    },
	tree_first_element: function($selected)
    {
         $selected.children("span.join").remove();
         $selected.children("span").addClass("main").removeClass("page");
    }
 // new addition

  });
  $.fn[pluginName] = function(options) {
    this.each(function() {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
    return this;
  };
  
 
  
})(jQuery, window, document);

