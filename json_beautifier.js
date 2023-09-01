segmentAlgebra = {
	"and": [
		{
			"audienceSegmentId": "29038"
		},
		{
			"not": {
				"or": [
					{
						"audienceSegmentId": "457278"
					},
					{
						"audienceSegmentId": "457277"
					},
					{
						"audienceSegmentId": "457276"
					},
					{
						"audienceSegmentId": "457275"
					},
					{
						"audienceSegmentId": "457274"
					},
					{
						"audienceSegmentId": "457273"
					},
					{
						"audienceSegmentId": "457272"
					},
					{
						"audienceSegmentId": "457271"
					},
					{
						"audienceSegmentId": "457270"
					},
					{
						"audienceSegmentId": "457269"
					},
					{
						"audienceSegmentId": "457268"
					}
				]
			}
		}
	]
}

var formattedString = JSON.stringify(segmentAlgebra, null, "\t");
        formattedString = formattedString.replace(/\n\t.*({|})/g,"");
        formattedString = formattedString.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;").replace(/\n/g, "<br>");
        formattedString = formattedString.replaceAll('\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},',"");
