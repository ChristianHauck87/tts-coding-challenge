		//defining variables for the bar chart
		var studentCountByAge = [<%=students[0].length%>,
								 <%=students[1].length%>, 
								 <%=students[2].length%>, 
								 <%=students[3].length%>, 
								 <%=students[4].length%>, 
								 <%=students[5].length%>
								 ];
		var ageCohorts = ["<=30", "31-35", "36-40", "41-45", "46-50", ">50"];
		var svgWidth = 500, svgHeight = 300, barPadding = 5, heightpadding = 15;
		var barWidth = (svgWidth / studentCountByAge.length);
		 

		// creating the drawing area
		var svg = d3.select('svg')
		    .attr("width", svgWidth)
		    .attr("height", svgHeight);

	    
	    // scales
	    var yScale = d3.scaleLinear()
		    .domain([0, d3.max(studentCountByAge)])
		    .range([0, svgHeight - heightpadding]);

		var yaxisScale = d3.scaleLinear()
	    	.domain([0, d3.max(studentCountByAge)])
	    	.range([svgHeight, 0]);
		    
		
		// creating the bar chart
		var barChart = svg.selectAll("rect")
		    .data(studentCountByAge)
		    .enter()
		    .append("rect")
		    .attr("y", function(d) {
		         return svgHeight - yScale(d)
		    })
		    .attr("height", function(d) { 
		        return yScale(d); 
		    })
		    .attr("width", barWidth - barPadding)
		    .attr("transform", function (d, i) {
		        var translate = [barWidth * i, 0]; 
		        return "translate("+ translate +")";
		    })
		    .attr("fill", "#8CC8FA");

	    // creating labels
	    var text = svg.selectAll("text")
		    .data(studentCountByAge)
		    .enter()
		    .append("text")
		    .text(function(d) {
		        return d;
		    })
		    .attr("y", function(d, i) {
		        return svgHeight - yScale(d) - 2;
		    })
		    .attr("x", function(d, i) {
		        return barWidth * i + barWidth/2;
		    })
		    .attr("fill", "#000000");

		// creating the axes
		var y_axis = d3.axisLeft().scale(yaxisScale);
         
				svg.append("g")
    			.attr("transform", "translate(50, 10)")
    			.call(y_axis);
