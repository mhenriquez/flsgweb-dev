using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml; //+

/// <summary>
/// Summary description for GoogleCalendarEvent
/// </summary>
public class GoogleCalendarEvent
{
	public Guid Id { get; set; }
	public String Title { get; set; }
	public String Content { get; set; }
	public String HyperLink { get; set; }
	public String Feed { get; set; }

	public GoogleCalendarEvent()
	{
		Id = Guid.NewGuid();
	}

	public GoogleCalendarEvent(string xmlFeed)
	{
		Id = Guid.NewGuid();

		XmlTextReader reader = new XmlTextReader(xmlFeed);

		reader.ReadToFollowing("entry");

		reader.ReadToFollowing("title");
		Title = reader.ReadElementContentAsString();

		reader.ReadToFollowing("content");
		Content = HttpUtility.HtmlEncode(reader.ReadElementContentAsString());

		reader.ReadToFollowing("link");
		HyperLink = reader.GetAttribute("href");

		reader.ReadToFollowing("link");
		Feed = reader.GetAttribute("href");
	}
}