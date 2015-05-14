/*
	TableOfContents Plugin for jQuery
	
	Programmed by Doug Neiner
	
	Version: 0.8
	
	Based on code and concept by Janko Jovanovic 
	  in his article: http://www.jankoatwarpspeed.com/post/2009/08/20/Table-of-contents-using-jQuery.aspx
	
	This plugin is offered under the MIT license:
	
	(c) 2009 by Doug Neiner, http://dougneiner.com
	
	Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:
    
    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
!function(t){t.TableOfContents=function(e,n,i){var o=this;return o.$el=t(e),o.el=e,o.toc="",o.listStyle=null,o.tags=["h1","h2","h3","h4","h5","h6"],o.init=function(){o.options=t.extend({},t.TableOfContents.defaultOptions,i),("undefined"==typeof n||null==n)&&(n=document.body),o.$scope=t(n);var e=o.$scope.find(o.tags.join(", ")).filter(":first");if(1==e.length){o.starting_depth=o.options.startLevel,o.options.depth<1&&(o.options.depth=1);var s=o.tags.splice(o.options.startLevel-1,o.options.depth);if(o.$headings=o.$scope.find(s.join(", ")),o.options.topLinks!==!1){var l=t(document.body).attr("id");""==l&&(l=o.options.topBodyId,document.body.id=l),o.topLinkId=l}return o.$el.is("ul")?o.listStyle="ul":o.$el.is("ol")&&(o.listStyle="ol"),o.buildTOC(),o.options.proportionateSpacing!==!0||o.tieredList()||o.addSpacing(),o}},o.tieredList=function(){return"ul"==o.listStyle||"ol"==o.listStyle},o.buildTOC=function(){o.current_depth=o.starting_depth,o.$headings.each(function(t){var e=this.nodeName.toLowerCase().substr(1,1);(t>0||0==t&&e!=o.current_depth)&&o.changeDepth(e),o.toc+=o.formatLink(this,e,t)+"\n",o.options.topLinks!==!1&&o.addTopLink(this)}),o.changeDepth(o.starting_depth,!0),o.tieredList()&&(o.toc="<li>\n"+o.toc+"</li>\n"),o.$el.html(o.toc)},o.addTopLink=function(e){var n=o.options.topLinks===!0?"Top":o.options.topLinks,i=t("<a href='#"+o.topLinkId+"' class='"+o.options.topLinkClass+"'></a>").html(n);t(e).append(i)},o.formatLink=function(e,n){var i=e.id;""==i&&(i=o.buildSlug(t(e).text()),e.id=i);var s="<a href='#"+i+"'";return o.tieredList()||(s+=" class='"+o.depthClass(n)+"'"),s+=">"+o.options.levelText.replace("%",t(e).text())+"</a>"},o.changeDepth=function(t,e){if(e!==!0&&(e=!1),!o.tieredList())return o.current_depth=t,!0;if(t>o.current_depth){for(var n=[],i=o.current_depth;t>i;i++)n.push("<"+o.listStyle+">\n");var s="<li>\n";o.toc+=n.join(s)+s}else if(t<o.current_depth){for(var l=[],i=o.current_depth;i>t;i--)l.push("</"+o.listStyle+">\n");o.toc+="</li>\n"+l.join("</li>\n"),e||(o.toc+="</li>\n<li>\n")}else e||(o.toc+="</li>\n<li>\n");o.current_depth=t},o.buildSlug=function(t){return t=t.toLowerCase().replace(/[^a-z0-9 -]/gi,"").replace(/ /gi,"-"),t=t.substr(0,50)},o.depthClass=function(t){return o.options.levelClass.replace("%",t-(o.starting_depth-1))},o.addSpacing=function(){var e=o.$headings.filter(":first").position().top;o.$headings.each(function(n){var i=o.$el.find("a:eq("+n+")"),s=(t(this).position().top-e)/(o.$scope.height()-e)*o.$el.height();i.css({position:"absolute",top:s})})},o.init()},t.TableOfContents.defaultOptions={startLevel:1,depth:3,levelClass:"toc-depth-%",levelText:"%",topLinks:!1,topLinkClass:"toc-top-link",topBodyId:"toc-top",proportionateSpacing:!1},t.fn.tableOfContents=function(e,n){return this.each(function(){var i=new t.TableOfContents(this,e,n);delete i})}}(jQuery),$(document).ready(function(){$("#toc").tableOfContents(document.body,{startLevel:2,depth:2})});