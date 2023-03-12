/**
* jQuery DatePicker
* @author biohzrdmx <github.com/biohzrdmx>
* @version 1.0
* @requires jQuery 1.8+
* @license MIT
*/
;!function(e){e.datePicker={strings:{monthsFull:["January","Febraury","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],daysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Su","Mo","Tu","We","Th","Fr","Sa"],messageLocked:"The day you have just selected is not available"},defaults:{formatDate:function(a){return e.datePicker.utils.pad(a.getDate(),2)+"/"+e.datePicker.utils.pad(a.getMonth()+1,2)+"/"+a.getFullYear()},parseDate:function(e){var a=new Date,t=e.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);return t&&4==t.length&&(a=new Date(t[3],t[2]-1,t[1])),a},selectDate:function(e){return!0},limitCenturies:!0,closeOnPick:!0},utils:{firstDay:function(e,a){return new Date(e,a,1).getDay()},daysInMonth:function(e,a){return new Date(e,++a,0).getDate()},buildDecadePicker:function(a,t){e.datePicker;var r=e('<div class="decades"></div>'),n=100*Math.floor(a/100)-10,d=e.datePicker.defaults.limitCenturies,s='<div class="row header"><a href="#" class="prev'+(d&&n<1900?" disabled":"")+'"><span class="arrow"></span></a><a href="#" class="century" data-century="'+(n+10)+'">'+(n+1)+"-"+(n+100)+'</a><a href="#" class="next'+(d&&1990==n?" disabled":"")+'"><span class="arrow"></span></a></div>';r.append(s);for(var l=0,c="",i=0,o=0;o<3;o++){for(var u=e('<div class="row"></div>'),h=0;h<4;h++)if(l=h+4*o,c=0==l?" grayed prev":11==l?" grayed next":"",i=n+10*l,d&&(i<1900||i>2090)){f=e('<a href="" class="cell large double decade blank">&nbsp;</a>');u.append(f)}else{t>=i&&t<=i+9&&(c+=" selected");var f=e('<a href="#" data-year="'+i+'" class="cell large double decade'+c+'"><span>'+i+"- "+(i+9)+"</span></a>");u.append(f)}r.append(u)}return r},buildYearPicker:function(a,t){e.datePicker;var r=e('<div class="years"></div>'),n=10*Math.floor(a/10)-1,d=e.datePicker.defaults.limitCenturies,s='<div class="row header"><a href="#" class="prev'+(d&&1899==n?" disabled":"")+'"><span class="arrow"></span></a><a href="#" class="decade" data-decade="'+(n+1)+'">'+(n+1)+"-"+(n+10)+'</a><a href="#" class="next'+(d&&2089==n?" disabled":"")+'"><span class="arrow"></span></a></div>';r.append(s);for(var l=0,c="",i=0,o=0;o<3;o++){for(var u=e('<div class="row"></div>'),h=0;h<4;h++)if(l=h+4*o,c=0==l?" grayed prev":11==l?" grayed next":"",i=n+l,d&&(i<1900||i>2099)){f=e('<a href="" class="cell large year blank">&nbsp;</a>');u.append(f)}else{i==t&&(c+=" selected");var f=e('<a href="#" data-year="'+i+'" class="cell large year'+c+'">'+i+"</a>");u.append(f)}r.append(u)}return r},buildMonthPicker:function(a,t){var r=e.datePicker,n=e('<div class="months"></div>'),d=e.datePicker.defaults.limitCenturies,s='<div class="row header"><a href="#" class="prev'+(d&&1900==a?" disabled":"")+'"><span class="arrow"></span></a><a href="#" class="year" data-year="'+a+'">'+a+'</a><a href="#" class="next'+(d&&2099==a?" disabled":"")+'"><span class="arrow"></span></a></div>';n.append(s);for(var l=0,c="",i=0;i<3;i++){for(var o=e('<div class="row"></div>'),u=0;u<4;u++){c="",(l=u+4*i)==t&&(c+=" selected");var h=e('<a href="#" data-year="'+a+'" data-month="'+l+'" class="cell large month'+c+'">'+r.strings.monthsShort[l]+"</a>");o.append(h)}n.append(o)}return n},buildCalendar:function(a,t,r){var n=e.datePicker,d=e('<div class="calendar"></div>'),s=new Date,a=a||s.getFullYear(),t=t>=0?t:s.getMonth(),l=new Date(a,t,1),c=e.datePicker.defaults.limitCenturies;l.setDate(l.getDate()-1);var i=l.getDate(),o=this.daysInMonth(a,t),u=this.firstDay(a,t),h=1-u;0==u&&(h-=7);var f='<div class="row header"><a href="#" class="prev'+(c&&1900==a&&0==t?" disabled":"")+'"><span class="arrow"></span></a><a href="#" class="month" data-year="'+a+'" data-month="'+t+'">'+n.strings.monthsFull[t]+" "+a+'</a><a href="#" class="next'+(c&&2099==a&&11==t?" disabled":"")+'"><span class="arrow"></span></a></div>';d.append(f);for(var p=e('<div class="row days"></div>'),v=0;v<7;v++)p.append('<div class="cell">'+n.strings.daysShort[v]+"</div>");d.append(p);for(v=0;v<6;v++){for(var m=e('<div class="row week"></div>'),y=0;y<7;y++){var k=h<=0?i+h:h>o?h-o:h,g=h<=0?" grayed prev":h>o?" grayed next":"";c&&(1900==a&&0==t&&h<1||2099==a&&11==t&&h>o)?(m.append('<a href="#" class="cell day blank">&nbsp;</a>'),h++):(h==s.getDate()&&t==s.getMonth()&&a==s.getFullYear()&&(g+=" today"),h==r.getDate()&&t==r.getMonth()&&a==r.getFullYear()&&(g+=" selected"),m.append('<a href="#" class="cell day'+g+'">'+k+"</a>"),h++)}d.append(m)}return d},pad:function(e,a){for(var t=e+"";t.length<a;)t="0"+t;return t}},show:function(a){var t=e.extend(!0,{},e.datePicker.defaults,a),r=null,n=new Date;t.element&&("string"==typeof t.element&&(t.element=e(t.element)),n=t.parseDate(t.element.val()));var d={day:n.getDate(),month:n.getMonth(),year:n.getFullYear(),decade:n.getFullYear()},s=e.datePicker.utils.buildCalendar(d.year,d.month,n),l=e.datePicker.utils.buildMonthPicker(d.year,d.month),c=e.datePicker.utils.buildYearPicker(d.year,d.year),i=e.datePicker.utils.buildDecadePicker(d.year,d.year);if((r=e('<div class="datepicker"><span class="tip"></span></div>')).append(s),r.append(l),r.append(c),r.append(i),e.datePicker.hide(!0),t.element){var o=t.element.offset();r.css({left:o.left+"px",top:o.top+t.element.outerHeight(!0)+15+"px"})}r.hide(),e("body").append(r),r.fadeIn(150),r.on("click",".calendar .day",function(a){a.preventDefault();var r=e(this),s=r.closest(".calendar");if(!r.hasClass("blank")){s.find(".selected").removeClass("selected"),r.addClass("selected"),d.day=parseInt(r.text())||1,r.hasClass("grayed")&&(r.hasClass("prev")?(d.year-=0==d.month?1:0,d.month=d.month>0?d.month-1:11):r.hasClass("next")&&(d.year+=11==d.month?1:0,d.month=d.month<11?d.month+1:0));var l=new Date;if(l.setFullYear(d.year,d.month,d.day),t.selectDate(l)){n.setFullYear(d.year,d.month,d.day);var c=t.formatDate(n);e(t.element).val(c),t.closeOnPick&&!r.hasClass("grayed")&&e.datePicker.hide()}}}),r.on("click",".calendar .month",function(a){a.preventDefault();var t=e(this).closest(".calendar"),n=r.children(".months"),s=e.datePicker.utils.buildMonthPicker(d.year,d.month);n.replaceWith(s),n=s,t.fadeOut(150,function(){n.fadeIn(150)})}),r.on("click",".calendar .prev",function(a){a.preventDefault();var t=e(this),r=t.closest(".calendar"),s=r.find(".month"),l=s.data("month"),c=s.data("year");t.hasClass("disabled")||((l-=1)<0&&(l=11,c--),d.month=l,d.year=c,replacement=e.datePicker.utils.buildCalendar(c,l,n),replacement.hide(),r.after(replacement),r.fadeOut(150,function(){r.detach(),replacement.fadeIn(150)}))}),r.on("click",".calendar .next",function(a){a.preventDefault();var t=e(this),r=t.closest(".calendar"),s=r.find(".month"),l=s.data("month"),c=s.data("year");t.hasClass("disabled")||((l+=1)>11&&(l=0,c++),d.month=l,d.year=c,replacement=e.datePicker.utils.buildCalendar(c,l,n),replacement.hide(),r.after(replacement),r.fadeOut(150,function(){r.detach(),replacement.fadeIn(150)}))}),r.on("click",".months .month",function(a){a.preventDefault();var t=e(this),s=t.closest(".months"),l=t.data("month"),c=t.data("year"),i=r.children(".calendar"),o=null;t.hasClass("blank")||(s.find(".selected").removeClass("selected"),t.addClass("selected"),d.month=l,(o=e.datePicker.utils.buildCalendar(c,l,n)).hide(),i.replaceWith(o),s.fadeOut(150,function(){o.fadeIn(150)}))}),r.on("click",".months .prev",function(a){a.preventDefault();var t=e(this),r=t.closest(".months"),n=r.find(".year").data("year");t.hasClass("disabled")||(n-=1,d.year=n,replacement=e.datePicker.utils.buildMonthPicker(n,d.month),replacement.hide(),r.after(replacement),r.fadeOut(150,function(){r.detach(),replacement.fadeIn(150)}))}),r.on("click",".months .next",function(a){a.preventDefault();var t=e(this),r=t.closest(".months"),n=r.find(".year").data("year");t.hasClass("disabled")||(n+=1,d.year=n,replacement=e.datePicker.utils.buildMonthPicker(n,d.month),replacement.hide(),r.after(replacement),r.fadeOut(150,function(){r.detach(),replacement.fadeIn(150)}))}),r.on("click",".months .year",function(a){a.preventDefault();var t=e(this).closest(".months"),n=r.children(".years"),s=e.datePicker.utils.buildYearPicker(d.decade,d.year);n.replaceWith(s),n=s,t.fadeOut(150,function(){n.fadeIn(150)})}),r.on("click",".years .year",function(a){a.preventDefault();var t=e(this),n=t.closest(".years"),s=t.data("year"),l=r.children(".months"),c=null;t.hasClass("blank")||t.hasClass("next")||t.hasClass("prev")||(n.find(".selected").removeClass("selected"),t.addClass("selected"),d.year=s,d.decade=s,(c=e.datePicker.utils.buildMonthPicker(s,d.month)).hide(),l.replaceWith(c),n.fadeOut(150,function(){c.fadeIn(150)}))}),r.on("click",".years .prev",function(a){a.preventDefault();var t=e(this),r=t.closest(".years"),n=r.find(".decade").data("decade");t.hasClass("disabled")||(n-=10,d.decade=n,replacement=e.datePicker.utils.buildYearPicker(n,d.year),replacement.hide(),r.after(replacement),r.fadeOut(150,function(){r.detach(),replacement.fadeIn(150)}))}),r.on("click",".years .next",function(a){a.preventDefault();var t=e(this),r=t.closest(".years"),n=r.find(".decade").data("decade");t.hasClass("disabled")||(n+=10,d.decade=n,replacement=e.datePicker.utils.buildYearPicker(n,d.year),replacement.hide(),r.after(replacement),r.fadeOut(150,function(){r.detach(),replacement.fadeIn(150)}))}),r.on("click",".years .decade",function(a){a.preventDefault();var t=e(this).closest(".years"),n=r.children(".decades");t.fadeOut(150,function(){n.fadeIn(150)})}),r.on("click",".decades .decade",function(a){a.preventDefault();var t=e(this),n=t.data("year"),s=t.closest(".decades"),l=r.children(".years"),c=null;t.hasClass("blank")||t.hasClass("next")||t.hasClass("prev")||(s.find(".selected").removeClass("selected"),t.addClass("selected"),(c=e.datePicker.utils.buildYearPicker(n,d.year)).hide(),l.replaceWith(c),s.fadeOut(150,function(){c.fadeIn(150)}))}),r.on("click",".decades .prev",function(a){a.preventDefault();var t=e(this),r=t.closest(".decades"),n=r.find(".century").data("century");t.hasClass("disabled")||(n-=100,replacement=e.datePicker.utils.buildDecadePicker(n,d.decade),replacement.hide(),r.after(replacement),r.fadeOut(150,function(){r.detach(),replacement.fadeIn(150)}))}),r.on("click",".decades .next",function(a){a.preventDefault();var t=e(this),r=t.closest(".decades"),n=r.find(".century").data("century");t.hasClass("disabled")||(n+=100,replacement=e.datePicker.utils.buildDecadePicker(n,d.decade),replacement.hide(),r.after(replacement),r.fadeOut(150,function(){r.detach(),replacement.fadeIn(150)}))}),r.on("click",".decades .century",function(e){e.preventDefault()}),e(document).on("mouseup",function(a){r.is(a.target)||0!==r.has(a.target).length||(e(document).off("mouseup"),e.datePicker.hide())})},hide:function(a){var a=a||!1,t=e(".datepicker");a?t.remove():t.fadeOut(150,t.remove)}},e.fn.datePicker=function(a){if(!this.length)return this;e.extend(!0,{},e.datePicker.defaults,a);return this.each(function(){var a=e(this),t=a.parent().find("[data-toggle=datepicker]"),r=a.data("locked");r=!!r&&r.split(";");var n=function(a){var t=!0,n=e.datePicker.utils.pad(a.getDate(),2)+"/"+e.datePicker.utils.pad(a.getMonth()+1,2)+"/"+a.getFullYear();if(r.length)for(var d=0;d<r.length;d++)if(r[d]==n){"function"==typeof e.alert?e.alert=e.datePicker.strings.messageLocked:alert(e.datePicker.strings.messageLocked),t=!1;break}return t};t.length?t.on("click",function(t){t.preventDefault(),e(".datepicker:visible").length?e.datePicker.hide():e.datePicker.show({element:a,selectDate:n})}):a.on("click",function(){e.datePicker.show({element:a,selectDate:n})})}),this},e("[data-select=datepicker]").each(function(){e(this).datePicker()})}(jQuery);